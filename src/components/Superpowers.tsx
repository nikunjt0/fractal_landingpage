import { TypePhase, useTypedSuperpower } from './useTypedSuperpower';
import cn from 'classnames';



type Props = {
  superpowers: string[];
}

export const Superpowers = ({ superpowers }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);

  return (
    <h2
      className="flex flex-col text-center lg:block text-5xl pt-96 tracking-tight text-secondary-300 relative md:text-6xl z-50"
    >
      <span className="text-primary">Improve Your </span>
      <span
        className={cn("text-primary", {
          'end-cursor': phase !== TypePhase.Deleting,
          'blinking': phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
        style={{ display: 'inline' }}
      >
        {typedSuperpower}
      </span>
    </h2>
  );
}
