import Loader from 'react-loaders'

export const Loading = () => {
  return (
    <div className="absolute top-[5%] translate-x-0 -translate-y-[50%]">
      <Loader active type="ball-pulse-sync" />
    </div>
  )
}
