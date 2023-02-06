import useSWR from 'swr';
import DragonsService from 'services';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useDragons = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data,
    isLoading: loadingList,
    mutate: mutateList
  } = useSWR('/', DragonsService.getAll, {
    fallbackData: [],
    revalidateOnFocus: false
  });

  const list = data.sort((a, b) => a.name.localeCompare(b.name));

  const { data: dragon, isLoading: loadingDragon } = useSWR(
    id ? `/${id}` : '',
    DragonsService.getById,
    { revalidateOnFocus: false }
  );

  const handleDelete = async (id: string) => {
    try {
      await DragonsService.remove(id);
      mutateList((list) => list?.filter((item) => item.id !== id));
      toast.success('Dragão removido com sucesso!');
    } catch (e) {
      toast.error('Ocorreu um erro, tente novamente!');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      id
        ? await DragonsService.update(values)
        : await DragonsService.create({
            ...values,
            createdAt: new Date().toISOString()
          });
      toast.success(`Dragão ${id ? 'atualizado' : 'cadastrado'} com sucesso!`);
      mutateList();
      navigate('/');
    } catch (e) {
      toast.error('Ocorreu um erro, tente novamente!');
    }
  };

  return {
    list,
    loadingList,
    mutateList,
    dragon,
    loadingDragon,
    handleDelete,
    handleSubmit
  };
};
