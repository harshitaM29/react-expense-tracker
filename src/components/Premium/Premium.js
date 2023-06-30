import classes from './Premium.module.css';
import {themeActions} from '../../store/theme';
import { useDispatch, useSelector } from 'react-redux';
import FileSaver from 'file-saver';
import * as XLSX from "xlsx";


const Premium = (props) => {
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
    let expenseData = [];
    let expense = Object.values(props.expenses || []);
    expense.map(item => (
        expenseData.push({'Expense Description':item.title,
    'Expense Catgory':item.des,
        'Expense Amount':item.amount})
    ))
    const dispatch = useDispatch();
    
    const buttonHandler = () => {
        dispatch(themeActions.buttonClicked());

    }
    const handleDownload = () => {
       
        const ws = XLSX.utils.json_to_sheet(expenseData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, "Expenses" + fileExtension);

    }
    const isClicked = useSelector(state => state.theme.isClicked)
    return (
      
    <div style={{marginLeft:isClicked ? '35%' : '42%'}} className={classes.premium}>
       <span><button onClick={buttonHandler}>Activate Premium</button></span>
   <span>{(props.amount > 10000 && isClicked )&& <button onClick={handleDownload}>Download File</button> }</span> 
        </div>
      
    )
};

export default Premium;