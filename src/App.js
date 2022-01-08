import useMergeState from "./hooks/useMergeState";
import "./styles.css";

export default function App() {
  const [data, setData] = useMergeState({ name: "Abhinav", age: 22 });
  console.log(data);
  return (
    <>
      <input
        value={data.name}
        onChange={(e) => setData({ name: e.target.value })}
      />
      <button onClick={() => setData(({ age }) => ({ age: age - 1 }))}>
        -
      </button>
      {data.age}
      <button onClick={() => setData(({ age }) => ({ age: age + 1 }))}>
        +
      </button>
    </>
  );
}
