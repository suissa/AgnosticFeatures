import { useEffect, useState } from "react";

interface Question {
  type: string;
  question?: string;
  question_type?: string;
  heading?: string;
  options?: string[];
}

const AnamneseForm = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:7535/anamnese/adulto");
        const data = await response.json();
        setQuestions(data.anamnese.questions || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar perguntas:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleChange = (question: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  if (loading) return <div className="text-center">Carregando...</div>;

  return (
    <form className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
      {questions.map((item, index) => {
        if (item.type === "heading" && item.heading) {
          return (
            <h2
              key={index}
              className="text-xl font-bold text-gray-800 border-b pb-2"
            >
              {item.heading}
            </h2>
          );
        }

        if (item.type === "question" && item.question) {
          if (item.question_type === "open") {
            return (
              <div key={index} className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  {item.question}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    handleChange(item.question || "", e.target.value)
                  }
                />
              </div>
            );
          }

          if (item.question_type === "single_option" && item.options) {
            return (
              <div key={index} className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  {item.question}
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    handleChange(item.question || "", e.target.value)
                  }
                >
                  <option value="">Selecione uma opção</option>
                  {item.options.map((option, optIndex) => (
                    <option key={optIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (item.question_type === "multiple_options" && item.options) {
            return (
              <div key={index} className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  {item.question}
                </label>
                <div className="flex flex-wrap gap-4">
                  {item.options.map((option, optIndex) => (
                    <label
                      key={optIndex}
                      className="inline-flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-500 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) =>
                          handleChange(item.question || "", {
                            ...formData[item.question || ""],
                            [option]: e.target.checked,
                          })
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          }
        }

        return null;
      })}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default AnamneseForm;
