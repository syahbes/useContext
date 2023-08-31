import { useGlobalState } from "../hooks/useGlobalState";

export function Display() {
const { globalState } = useGlobalState();
    return <h1>{globalState.count}</h1>;
}