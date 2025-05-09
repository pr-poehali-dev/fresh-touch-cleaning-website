
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-md p-6">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="FileQuestion" className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-blue-900">404</h1>
        <p className="text-xl text-slate-600 mb-6">
          Упс! Страница не найдена
        </p>
        <p className="text-slate-500 mb-8">
          Возможно, страница была удалена или адрес был введен неправильно.
        </p>
        <Button asChild className="bg-blue-700 hover:bg-blue-800">
          <a href="/">
            <Icon name="Home" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
