import { Button, Tooltip } from 'components';
import { MdDelete, MdEdit, MdLightbulb } from 'react-icons/md';

/** Componente Actions
 *
 * @param {Function} handleEdit - função para edição do card
 * @param {Function} handleDelete - função para deletar o card
 * @param {Function} handleDetails - função para ver detalhes do card
 * @param {string} id - id de identificação do item
 *
 */

type ActionsProps = {
  handleEdit: () => void;
  handleDelete: () => void;
  handleDetails: () => void;
  id: string;
};

export const Actions = ({
  handleEdit,
  handleDelete,
  handleDetails,
  id
}: ActionsProps) => {
  const ActionButton = ({ onClick, icon: Icon, bg, id, content }: any) => (
    <Tooltip id={id} content={content}>
      <Button onClick={onClick} className={`actionsButton ${bg}`}>
        <Icon />
      </Button>
    </Tooltip>
  );

  return (
    <div className='flex gap-3'>
      <ActionButton
        onClick={handleEdit}
        bg='hover:bg-lime-600'
        icon={MdEdit}
        id={`edit-${id}`}
        content='Editar'
      />

      <ActionButton
        onClick={handleDelete}
        bg='hover:bg-rose-700'
        icon={MdDelete}
        id={`delete-${id}`}
        content='Excluir'
      />

      <ActionButton
        onClick={handleDetails}
        bg='hover:bg-indigo-700'
        icon={MdLightbulb}
        id={`details-${id}`}
        content='Ver detalhes'
      />
    </div>
  );
};
