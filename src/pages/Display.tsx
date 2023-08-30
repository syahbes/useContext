import { useGlobalState } from "./useGlobalState";

export function Display() {
const { globalState } = useGlobalState();
    return <h1>{globalState.count}</h1>;
}