import produce from 'immer'
import create from 'zustand'

export interface EnvironmentStore {
  gaTrackingId: string | undefined
  set: (x: (x: EnvironmentStore) => void) => void
}

const useEnvironment = create<EnvironmentStore>((set) => ({
  gaTrackingId: undefined,
  set: (fn) => set(produce(fn))
}))

export default useEnvironment
