import React, { useState } from "react";


function Bmi() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");
    const calculateBmi = () => {
        if(height && weight) {
             const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmi);
            if(bmi < 18.5) {
                setCategory("Underweight");
            } else if(bmi >= 18.5 && bmi <= 24.9) { 
                setCategory("Normal weight");
            } else if(bmi >= 25 && bmi <= 29.9) {
                setCategory("Overweight");
            } else {
                setCategory("Obese");
            }
        }

    }
  return (
    <>
      <div className="container flex bg-blue-400 justify-center items-center h-screen m-auto w-lvw ">
        <div>
          <img src="" alt="" />
        </div>
        <div className="bg-white p-10 rounded-lg">
          <h1 className="text-4xl font-bold mb-5 flex justify-center">
            BMI Calculator
          </h1>
          <form className="flex flex-col ">
            <div className="font-mono m-1 p-2 border-4">
              <label className="m-1 text-xl">Height(cm)-</label>
              <input type='number' value={height} onChange={(e) => {setHeight(e.target.value)}} placeholder="Enter your height" />
            </div>
            <div className="font-mono m-1 p-2 border-4">
              <label className="m-1 text-xl">Weight(kg)-</label>
              <input type='number' value ={weight}   onChange={(e) => {setWeight(e.target.value)}} placeholder="Enter your weight" />
            </div>

            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
              onClick={calculateBmi}>Calculate</button>
        {

              
                bmi && (
                    <div className='result font-mono text-xl m-1' >
                        <h3>Your BMI : {bmi}</h3>
                        <h4>Category : {category}</h4>
                    </div>
                )
            }


          </form>
        </div>
      </div>
    </>
  );
}

export default Bmi;
