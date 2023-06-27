import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


const ExpenseList = props => {
    let data = props.items;
    return(
    <Card className={classes.list}>
        <ul  >
            {data.map((key) => (

                <ExpenseItem key={key.id} title={key.title}
                amount={key.amount} des={key.des} />
            ))}
        </ul>
        </Card>
    )

};

export default ExpenseList;