import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addNutritionData } from "../../../services/nutritionServices";

export default function AddNutrition() {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [array, setArray] = useState([]);
  const [calories, setCalories] = useState("");
  const [totalFat, setTotalfFat] = useState("");
  const [saturatedFat, setSaturatedFat] = useState("");
  const [polyUnsaturatedFat, setPolyUnsaturatedFat] = useState("");
  const [monoUnsaturatedFat, setMonoUnsaturatedFat] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [sodium, setSodium] = useState("");
  const [potassium, setPotassium] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [
    carbohydrateFromDietaryFiber,
    setCarbohydrateFromDietaryFiber,
  ] = useState("");
  const [carbohydrateFromSugar, setCarbohydrateFromSugar] = useState("");
  const [protein, setProtein] = useState("");
  const [vitaminA, setVitaminA] = useState("");
  const [vitaminB6, setVitaminB6] = useState("");
  const [vitaminC, setVitaminC] = useState("");
  const [vitaminD, setVitaminD] = useState("");
  const [iron, setIron] = useState("");
  const [cobalamin, setCobalamin] = useState("");
  const [calcium, setCalcium] = useState("");
  const [magnesium, setMagnesium] = useState("");

  const MySwal = withReactContent(Swal);
  const Toast = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (array.length === 0) {
      {
        setSubmitting(false);
        Toast.fire({
          type: "error",
          title: "Please Enter Quantities",
        });
      }
    } else {
      if (
        (name &&
          type &&
          quantity &&
          calories &&
          totalFat &&
          saturatedFat &&
          polyUnsaturatedFat &&
          monoUnsaturatedFat &&
          cholesterol &&
          sodium &&
          potassium &&
          carbohydrate &&
          carbohydrateFromDietaryFiber &&
          carbohydrateFromSugar &&
          protein &&
          vitaminA &&
          vitaminB6 &&
          vitaminC &&
          vitaminD &&
          iron &&
          cobalamin &&
          calcium &&
          magnesium) !== ""
      ) {
        const data = {
          name,
          type,
          quantity: array,
          calories,
          totalFat,
          saturatedFat,
          polyUnsaturatedFat,
          monoUnsaturatedFat,
          cholesterol,
          sodium,
          potassium,
          carbohydrate,
          carbohydrateFromDietaryFiber,
          carbohydrateFromSugar,
          protein,
          vitaminA,
          vitaminB6,
          vitaminC,
          vitaminD,
          iron,
          cobalamin,
          calcium,
          magnesium,
        };

        addNutritionData(data)
          .then((res) => {
            console.log("resdata============>>>>>>", res);
            if (res.data.status === 200) {
              setName("");
              setType("");
              setQuantity("");
              setArray([]);
              setCalories("");
              setTotalfFat("");
              setSaturatedFat("");
              setPolyUnsaturatedFat("");
              setMonoUnsaturatedFat("");
              setCholesterol("");
              setSodium("");
              setPotassium("");
              setCarbohydrate("");
              setCarbohydrateFromDietaryFiber("");
              setCarbohydrateFromSugar("");
              setProtein("");
              setVitaminA("");
              setVitaminB6("");
              setVitaminC("");
              setVitaminD("");
              setIron("");
              setCobalamin("");
              setCalcium("");
              setMagnesium("");
              setSubmitting(false);
              Toast.fire({
                type: "success",
                title: "Your Data Entered Successfully!",
              });
            }
          })
          .catch((err) => {
            setSubmitting(false);
            console.log("err=======>>>>>>>", err.response);
            Toast.fire({
              type: "error",
              title: err.response.data.error.message,
            });
          });
      } else {
        setSubmitting(false);
        Toast.fire({
          type: "error",
          title: "Please Enter All Data",
        });
      }
    }
  };

  return (
    <div style={{ padding: "10%" }}>
      <Card style={{ padding: "5%" }}>
        <Form>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              name='name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter type'
              name='type'
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity:</Form.Label>
            <div style={{ flexDirection: "column", display: "flex" }}>
              {array !== []
                ? array.map((resp, index) => {
                    return (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid #28a745",
                          marginTop: "10px",
                          justifyContent: "space-between",
                          display: "flex",
                        }}
                        key={index}>
                        <font
                          style={{
                            fontSize: 20,
                            marginLeft: "5px",
                          }}>
                          {resp.quantity}
                        </font>
                        <Button
                          style={{
                            margin: "5px",
                            borderRadius: "360px",
                          }}
                          variant='danger'
                          onClick={() => {
                            setArray(
                              array.filter((val) => {
                                return val !== resp;
                              })
                            );
                          }}>
                          X
                        </Button>
                      </div>
                    );
                  })
                : ""}
            </div>
            {console.log(array)}
            <Form.Control
              type='text'
              placeholder='Enter quantity'
              name='quantity'
              onChange={(e) => setQuantity(e.target.value)}
              style={{ marginTop: "5px" }}
              value={quantity}
            />
          </Form.Group>

          <Form.Group>
            <Button
              title='text'
              onClick={() => {
                // array.push(quantity);
                setArray([...array, { quantity }]);
                //setArray(array.concat(quantity));
              }}>
              Add
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Label>calories:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Calories'
              name='calories'
              onChange={(e) => setCalories(e.target.value)}
              value={calories}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total Fat:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Total fat'
              name='totalFat'
              onChange={(e) => setTotalfFat(e.target.value)}
              value={totalFat}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Saturated Fat:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Saturated Fat'
              name='saturatedFat'
              onChange={(e) => setSaturatedFat(e.target.value)}
              value={saturatedFat}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>PolyUnsaturated Fat:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter polyUnsaturated Fat'
              name='polyUnsaturatedFat'
              onChange={(e) => setPolyUnsaturatedFat(e.target.value)}
              value={polyUnsaturatedFat}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>MonoUnsaturated Fat:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter MonoUnsaturated Fat'
              name='monoUnsaturatedFat'
              onChange={(e) => setMonoUnsaturatedFat(e.target.value)}
              value={monoUnsaturatedFat}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cholesterol:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Cholesterol'
              name='cholesterol'
              onChange={(e) => setCholesterol(e.target.value)}
              value={cholesterol}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sodium:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Sodium'
              name='sodium'
              onChange={(e) => setSodium(e.target.value)}
              value={sodium}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Potassium:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Potassium'
              name='potassium'
              onChange={(e) => setPotassium(e.target.value)}
              value={potassium}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carbohydrate:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Carbohydrate'
              name='carbohydrate'
              onChange={(e) => setCarbohydrate(e.target.value)}
              value={carbohydrate}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carbohydrate From Dietary Fiber:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Carbohydrate From Dietary Fiber'
              name='carbohydrateFromDietaryFiber'
              onChange={(e) => setCarbohydrateFromDietaryFiber(e.target.value)}
              value={carbohydrateFromDietaryFiber}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carbohydrate From Sugar:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Carbohydrate From Dietary Sugar'
              name='carbohydrateFromDietarySugar'
              onChange={(e) => setCarbohydrateFromSugar(e.target.value)}
              value={carbohydrateFromSugar}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Protein:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Protein'
              name='protein'
              onChange={(e) => setProtein(e.target.value)}
              value={protein}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Vitamin A:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Vitamin A'
              name='vitaminA'
              onChange={(e) => setVitaminA(e.target.value)}
              value={vitaminA}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Vitamin B-6:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Vitamin B-6'
              name='vitaminB6'
              onChange={(e) => setVitaminB6(e.target.value)}
              value={vitaminB6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Vitamin C:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Vitamin C'
              name='vitaminC'
              onChange={(e) => setVitaminC(e.target.value)}
              value={vitaminC}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Vitamin D:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Vitamin D'
              name='vitaminD'
              onChange={(e) => setVitaminD(e.target.value)}
              value={vitaminD}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Iron:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Iron'
              name='iron'
              onChange={(e) => setIron(e.target.value)}
              value={iron}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cobalamin:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Cobalamin'
              name='cobalamin'
              onChange={(e) => setCobalamin(e.target.value)}
              value={cobalamin}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Calcium:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Calcium'
              name='calcium'
              onChange={(e) => setCalcium(e.target.value)}
              value={calcium}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Magnesium:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Magnesium'
              name='magnesium'
              onChange={(e) => setMagnesium(e.target.value)}
              value={magnesium}
            />
          </Form.Group>

          <Button variant='primary' type='submit' onClick={handleSubmit}>
            {submitting ? <div>Submitting...</div> : <div>Submit</div>}
          </Button>
        </Form>
      </Card>
    </div>
  );
}
