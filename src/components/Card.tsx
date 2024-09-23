type CardProps = {
    className: string;
    children: React.ReactNode;
  };
  
  export default function Card({ className, children }: CardProps) {
  
    const style = className + " rounded-md bg-[#D9A16D]";
  
    return (
      <div className={style}>{children}</div>
    )
  }