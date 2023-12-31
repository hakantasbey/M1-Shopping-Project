import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { dataToUi } from './src/dataToUi';
import { categoryArrFunc } from './src/categoryArr';

const getShoppingData = async()=>{
  try {
    const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
    if(!res.ok){
      throw new Error(alert("Opss...Something went wrong.Please try again later ")) 
    }else{
      const data = await res.json()
      dataToUi(data)
      categoryArrFunc(data)
    }
  } catch (error) {
    console.log(error);
  }
}

getShoppingData()


