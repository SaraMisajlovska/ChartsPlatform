import {DatePicker, Select, Space} from "antd";
import {useState} from "react";

const {Option} = Select;

const PeriodFilter = (props) => {

  const {
    type,
    setType,
    setPeriod
  } = props;

  const availableTypes = [
    {name: 'Date', value: 'date'},
    {name: 'Month', value: 'month'},
    {name: 'Quarter', value: 'quarter'},
    {name: 'Year', value: 'year'},
  ]
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePeriod = (value) => {
    setSelectedDate(value);

    let formattedValue;
    switch (type) {
      case 'date':
        formattedValue = value.format("YYYY-MM-DD");
        break;
      case 'month':
        formattedValue = value.format("YYYY-MM");
        break;
      case 'quarter':
        formattedValue = `${value.year()}-Q${Math.ceil((value.month() + 1) / 3)}`;
        break;
      case 'year':
        formattedValue = value.year().toString();
        break;
      default:
        formattedValue = value;
    }
    console.log({formattedValue});
    setPeriod(formattedValue);
  }

  const handleTypeChange = (type) => {
    setType(type)
    setSelectedDate(null);
  }

  return (
    <Space style={{marginRight: 10}}>
      <Select
        value={type}
        style={{width: 100}}
        onChange={(type) => handleTypeChange(type)}>
        {availableTypes.map((type) => (
          <Option
            key={type.value}
            value={type.value}>
            {type.name}
          </Option>
        ))}
      </Select>
      <DatePicker
        value={selectedDate}
        picker={type}
        onChange={(value) => handlePeriod(value)}/>
    </Space>
  );
}

export default PeriodFilter;