import TrendItem from "./TrendItem";

function TrendList({ data }) {
    return (
        <>
            {data.map((item) => (
                <TrendItem dataItem={item} key={item.id} />
            ))}
        </>
    );
}
export default TrendList;
