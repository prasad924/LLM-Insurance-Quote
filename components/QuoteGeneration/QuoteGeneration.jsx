import React, { useEffect, useState } from "react";
import "./QuoteGeneration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const QuoteGeneration = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    months: "",
    age: "",
    gender: "",
    bmi: "",
    children: "",
    smoker: "",
    medical_history: "",
    family_medical_history: "",
    exercise_frequency: "",
  });
  useEffect(() => {
    if (location.state?.text) {
      setFormData((prevState) => ({
        ...prevState,
        months: location.state.text,
      }));
    }
  }, [location.state]);
  
  const [quotation, setQuotation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const chatBotOutput = async (e) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/get-quote",
        formData
      );
      setQuotation(response.data.quotation);
      navigate("/generatedQuote", { state: { response: response.data.quotation } });
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = async (e) => {
    e.preventDefault();
    await chatBotOutput(e);
    setFormData({
      age: "",
      gender: "",
      bmi: "",
      children: "",
      smoker: "",
      medical_history: "",
      family_medical_history: "",
      exercise_frequency: "",
    });
  };

  return (
    <>
      <div
        style={{
          height: "calc(100vh - 80px)",
          backgroundImage: `url('/ChatBot-bg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="underline text-center select-none"
          style={{
            fontFamily: `"Inria Serif", serif`,
            fontWeight: 400,
            fontSize: "48px",
          }}
        >
          Quote Generation
        </p>
        {/* <div
          id="chat"
          className="chat overflow-y-scroll fixed bottom-28 w-screen flex flex-col gap-2"
          style={{ maxHeight: "65vh" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "user"
                  ? "myInput flex justify-end gap-2 mx-8"
                  : "LLMOutput flex gap-2 mx-8"
              }
            >
              {message.sender === "user" ? (
                <>
                  <div
                    className="border border-black  rounded-3xl content-center px-5 py-2.5 whitespace-pre-wrap overflow-y-auto"
                    style={{
                      backgroundColor: "#E9E9E9",
                      maxWidth: "50vw",
                      wordWrap: "break-word",
                    }}
                  >
                    {message.text}
                  </div>
                  <img src="/Profile.webp" alt="user" />
                </>
              ) : (
                <>
                  <img src="/chatbot.webp" alt="bot" />
                  <div
                    className="border border-black rounded-full content-center bg-white  px-5 py-2.5 whitespace-pre-wrap overflow-y-auto"
                    style={{ maxWidth: "50vw", wordWrap: "break-word" }}
                  >
                    {message.text}
                  </div>
                </>
              )}
            </div>
          ))}
        </div> */}
        <form onSubmit={handleUserClick}>
          <div>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Gender:
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              BMI:
              <input
                type="number"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Children:
              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Smoker:
              <input
                type="text"
                name="smoker"
                value={formData.smoker}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Medical History:
              <input
                type="text"
                name="medical_history"
                value={formData.medical_history}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Family Medical History:
              <input
                type="text"
                name="family_medical_history"
                value={formData.family_medical_history}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Exercise Frequency:
              <input
                type="text"
                name="exercise_frequency"
                value={formData.exercise_frequency}
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black w-36 p-2 h-14 flex rounded-lg items-center justify-center gap-2 cursor-pointing"
          >
            {loading ? (
              <p className="text-white">Submitting...</p>
            ) : (
              <>
                <p className="text-white">Submit</p>
                <img
                  src="/send.svg"
                  alt="send"
                  className="text-xs rounded-lg"
                />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default QuoteGeneration;

{
  /* <div className='flex gap-3 fixed bottom-4 w-screen justify-between items-center px-2'>
          
          </div>
          className='cursor-text m-0 resize-none border-0 px-0 focus:ring-0 focus-visible:ring-0'
          style={{ width: 'inherit', borderRadius: '8px', height: '80px', padding: '20px' }} */
}
