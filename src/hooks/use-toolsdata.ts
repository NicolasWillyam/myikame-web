import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getToolsData } from "@/use-cases/get-tools-data";
import { ToolData } from "@/entities/tool";

const useToolsData = () => {
  const [toolsData, setToolsData] = useState<ToolData | null>(null);
  const [loading, setLoading] = useState(true);

  console.log("call");

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("authToken");
      console.log(token);

      if (token) {
        console.log("run");

        try {
          console.log("run");
          const data = await getToolsData(token);
          setToolsData(data);
        } catch (error) {
          console.error("Failed to fetch tools data", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return { toolsData, loading };
};

export default useToolsData;
