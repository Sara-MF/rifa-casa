type InfoProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;

};
  
export default function Info({ title, subtitle, children, className }: InfoProps) {

  const style: string = "w-full rounded-md bg-cream border-dashed border-2 border-light-orange p-4 shadow-md flex flex-col " + className;

  return (
    <div className={style}>
      <h1 className="text-navy-blue text-lg font-medium mb-2">{title}</h1>
      <h1 className="text-orange text-lg font-medium mb-2">{subtitle}</h1>
      <span className="text-orange">{children}</span>
    </div>
  )
}