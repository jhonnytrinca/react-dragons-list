type InfoTextProps = {
  name: string;
  text: string | undefined;
};

export const InfoText = ({ name, text }: InfoTextProps) => (
  <div className='flex gap-3'>
    <h3 className='text-blue-500 font-semibold'>{name}:</h3>
    <p className='text-gray-500'>{!!text ? text : 'Não informado'}</p>
  </div>
);
