import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getToolsData } from "@/use-cases/get-tools-data";
import { ToolData } from "@/entities/tool"; // Giả định ToolData là kiểu dữ liệu cho mỗi công cụ

const useToolsData = () => {
  const [toolsData, setToolsData] = useState<ToolData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("authToken");
      if (token) {
        try {
          const data = await getToolsData(token);
          // Kiểm tra xem data có phải là mảng hay không
          if (Array.isArray(data)) {
            setToolsData(data); // Cập nhật state với mảng dữ liệu
          } else {
            console.error("Expected data to be an array:", data);
            setToolsData(null); // Hoặc có thể gán một mảng rỗng []
          }
        } catch (error) {
          console.error("Failed to fetch tools data", error);
          setToolsData(null); // Gán null hoặc một mảng rỗng nếu có lỗi
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Nếu không có token, cũng cần dừng loading
      }
    };

    fetchData();
  }, []);

  return { toolsData, loading };
};

export default useToolsData;
