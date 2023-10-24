import TrendItem from "./TrendItem";

function TrendList({ data }) {
    console.log(data);

    return (
        <>
            {data.map((item) => (
                <TrendItem dataItem={item} key={item.id} />
            ))}
        </>
    );
}
export default TrendList;
