type CardProps = {
  className: string;
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {

  const style = className + " rounded-md";

  return (
    <div className={style}>{children}</div>
  )
}