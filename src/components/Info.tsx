type InfoProps = {
    title: string;
    content: string;
  };
  
  export default function Info({ title, content }: InfoProps) {

    return (
      <div className="w-full md:w-1/5 rounded-md bg-cream border-dashed border-2 border-light-orange mb-8 flex flex-col items-center p-4 shadow-md">
        <h1 className="text-navy-blue text-lg font-medium mb-4">{title}</h1>
        <p className="text-orange">{content}</p>
      </div>
    )
  }