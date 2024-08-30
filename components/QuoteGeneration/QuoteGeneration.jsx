import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Typography,
  Slider,
  TextField,
  Grid,
} from "@mui/material";

const QuoteGeneration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    months: "",
    age: "",
    gender: "",
    bmi: 0,
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

  const [loading, setLoading] = useState(false);
  const [quotation,setQuotation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSliderChange = (event, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      bmi: newValue,
    }));
  };

  const chatBotOutput = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/get-quote", formData);
      setQuotation(response.data.quotation);
      setQuotation("quotation is" + Math.random()*100) //use for simulation purposes if backend is not avaliable 
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const print = () => {
    navigate('/print-quote', {
      state: { form: formData, quote : quotation }
  });
  }
  const handleUserClick = async (e) => {
    e.preventDefault();
    await chatBotOutput();
    // setFormData({
    //   months: "",
    //   age: "",
    //   gender: "",
    //   bmi: 0,
    //   children: "",
    //   smoker: "",
    //   medical_history: "",
    //   family_medical_history: "",
    //   exercise_frequency: "",
    // });
  };

  return (
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

      <form onSubmit={handleUserClick} style={{ padding: "16px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} >
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "100%", } }}>
              <TextField
                required
                id="outlined-age"
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                inputProps={{ min: 0 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl sx={{ m: 1, width: "100%" }} required >
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
              //  className="cursor-text"
                labelId="gender-label"
                id="gender-select"
                name="gender"
                value={formData.gender}
                label="Gender *"
                onChange={handleChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                justifyContent: "center", 
                textAlign: "center",
                m: "auto", 
              }}
            >
              <Typography id="non-linear-slider" gutterBottom>
                BMI: {formData.bmi.toFixed(1)}
              </Typography>
              <Slider
                value={formData.bmi}
                min={0}
                step={0.1}
                max={100}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                sx={{ width: "100%" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}>
              <TextField
                id="outlined-children"
                label="Children"
                name="children"
                type="number"
                value={formData.children}
                onChange={handleChange}
                inputProps={{ min: 0 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl sx={{ m: 1, width: "100%" }} required>
              <InputLabel id="smoker-label">Smoker</InputLabel>
              <Select
                labelId="smoker-label"
                id="smoker-select"
                name="smoker"
                value={formData.smoker}
                label="Smoker *"
                onChange={handleChange}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}>
              <TextField
                id="outlined-medical-history"
                label="Medical History"
                name="medical_history"
                value={formData.medical_history}
                onChange={handleChange}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}>
              <TextField
                id="outlined-family-medical-history"
                label="Family Medical History"
                name="family_medical_history"
                value={formData.family_medical_history}
                onChange={handleChange}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}>
              <TextField
                id="outlined-exercise-frequency"
                label="Exercise Frequency"
                name="exercise_frequency"
                value={formData.exercise_frequency}
                onChange={handleChange}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <button
            type="submit"
            disabled={loading}
            className={`bg-black w-36 p-2 h-14 flex rounded-lg items-center justify-center gap-2 ${
              loading ? "cursor-not-allowed" : "cursor-pointing"
            }`}
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
        </Box>
      </form>
      {quotation && (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-5xl">Your estimated Quote is ₹{quotation.match(/\d*\.?\d+/g)[0]}</p>
          <button className="bg-slate-400 p-2 flex rounded-lg text-white text-center cursor-pointing " onClick={print}>Print</button>
        </div>
      )}
    </div>
  );
};

export default QuoteGeneration;
