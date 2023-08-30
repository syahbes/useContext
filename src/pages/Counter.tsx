import { useGlobalState } from "./useGlobalState";

export function Counter() {
  const { globalState, setGlobalState } = useGlobalState();
  return (
    <>
      <div className="btnStack">
        <button onClick={() => setGlobalState({ ...globalState, count: globalState.count + 1 }) }>
          +1
        </button>
        <button onClick={() => setGlobalState({ ...globalState, count: globalState.count - 1 })}>
          -1
        </button>
      </div>
      <div className="btnStack">
        <button 
        onClick={() => setGlobalState({ 
          ...globalState,
          count: globalState.count + Number(globalState.customNum)})}>
          Add
        </button>
        <input
          value={globalState.customNum}
          onChange={(e) => setGlobalState({ ...globalState, customNum: Number(e.target.value) })}
          type="number"
          className="inputNum"
        />
      </div>
    </>
  );
}