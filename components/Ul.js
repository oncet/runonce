export default function Ul({ condensed = false, children }) {
  return <ul className={"flex list-disc flex-col pl-4 " + (condensed ? 'gap-1' : 'gap-4')}>{children}</ul>;
}
