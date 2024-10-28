import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getToolsData } from "@/use-cases/get-tools-data";
import { ToolData } from "@/entities/tool"; // Giả định ToolData là kiểu dữ liệu cho mỗi công cụ
import { getUserInfo } from "@/moudules/services/key-cloak-service";

const useToolsData = () => {
  const [toolsData, setToolsData] = useState<ToolData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy thông tin người dùng từ Keycloak
        const userProfile = await getUserInfo();
        const token = userProfile?.accessToken; // Lấy token từ userProfile

        if (token) {
          const data = await getToolsData(token);
          // Kiểm tra xem data có phải là mảng hay không
          if (Array.isArray(data)) {
            setToolsData(data); // Cập nhật state với mảng dữ liệu
          } else {
            console.error("Expected data to be an array:", data);
            setToolsData(null); // Hoặc có thể gán một mảng rỗng []
          }
        } else {
          console.error("Access token is not available");
          setError("Access token is not available");
          setToolsData(null);
        }
      } catch (error) {
        console.error("Failed to fetch tools data", error);
        setError("Failed to fetch tools data");
        setToolsData(null); // Gán null hoặc một mảng rỗng nếu có lỗi
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { toolsData, loading, error };
};

export default useToolsData;
