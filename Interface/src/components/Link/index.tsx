import PageContext from "../../contexts/PageContext"

type LinkProps = {
  page: "home" | "translate"
  className: string
  children: React.ReactNode
}

function Link({ page, children, className }: LinkProps) {
  return (
    <PageContext.Consumer>
      {(context) => (
        <a onClick={() => context?.setPage(page)} className={className}>
          {children}
        </a>
      )}
    </PageContext.Consumer>
  )
}
export default Link
