import classes from './Premium.module.css';
import {themeActions} from '../../store/theme';
import { useDispatch, useSelector } from 'react-redux';
import { EXCEL_FILE_BASE64 } from '../../constants';
import FileSaver from 'file-saver';


const Premium = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    
    const buttonHandler = () => {
        dispatch(themeActions.buttonClicked());

    }
    const handleDownload = () => {
        let data = EXCEL_FILE_BASE64;
        let slicesize = 1024;
        let byteCharacter = atob(data);
        let bytesLength = byteCharacter.length;
        let sliceCount = Math.ceil(bytesLength / slicesize);
        let byteArrays = new Array(sliceCount);
        for(let sliceIndex = 0; sliceIndex < sliceCount; ++sliceIndex){
            let begin = sliceIndex * slicesize;
            let end = Math.min(begin + slicesize, bytesLength);
            let bytes = new Array(end - begin);
            for(var offset = begin, i=0; offset < end; ++i, ++offset){
                bytes[i] = byteCharacter[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);

        }
        let blob = new Blob(byteArrays, {type: 'application/vnd.ms-excel'});
        FileSaver.saveAs(new Blob([blob], {}), "expense.xlsx");
        console.log('download started');

    }
    const isClicked = useSelector(state => state.theme.isClicked)
    return (
    <div style={{marginLeft:isClicked ? '35%' : '42%'}} className={classes.premium}>
       <span><button onClick={buttonHandler}>Activate Premium</button></span> 
   <span>{isClicked && <button onClick={handleDownload}>Download File</button> }</span> 
        </div>
    )
};

export default Premium;