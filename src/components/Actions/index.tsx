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
  id?: string;
};

type ButtonProps = {
  onClick: () => void;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  bg: string;
  id: string;
  content: string;
  testId: string;
};

export const Actions = ({
  handleEdit,
  handleDelete,
  handleDetails,
  id
}: ActionsProps) => {
  const ActionButton = ({
    onClick,
    icon: Icon,
    bg,
    id,
    content,
    testId
  }: ButtonProps) => (
    <Tooltip id={id} content={content}>
      <Button
        onClick={onClick}
        className={`actionsButton ${bg} dark:text-gray-100`}
        data-testId={testId}
      >
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
        testId='edit-button'
      />

      <ActionButton
        onClick={handleDelete}
        bg='hover:bg-rose-700'
        icon={MdDelete}
        id={`delete-${id}`}
        content='Excluir'
        testId='delete-button'
      />

      <ActionButton
        onClick={handleDetails}
        bg='hover:bg-indigo-700'
        icon={MdLightbulb}
        id={`details-${id}`}
        content='Ver detalhes'
        testId='details-button'
      />
    </div>
  );
};
