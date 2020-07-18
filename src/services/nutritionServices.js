import Axios from "axios";
export const addNutritionData = (data) => {
  return Axios.post(
    "https://nutrition-api-node.herokuapp.com/nutrition/nutritionData",
    data
  );
};
