import Calendar from 'react-calendar'


    const DiaryCalendar = ({ entries,setFilter }) => {
        const [filter, setFilter] = useState(null);
    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().split("T")[0];
        setFilter(formattedDate);
    }


    



    return (
        <>
        
        <Calendar 
        />
        
        </>
    );



};

export default DiaryCalendar;
