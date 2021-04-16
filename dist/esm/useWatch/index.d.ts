export interface Config {
    immediate: boolean;
}
declare const useWatch: <T = any>(dep: T, callback: (prevDep: T) => void, config?: Config) => () => void;
export default useWatch;
