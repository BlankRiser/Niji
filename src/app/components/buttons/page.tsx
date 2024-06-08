import { CardView } from '@/components/common/card-view';
import { BUTTONS } from '@/constants/buttons';

export default function Buttons() {
  return (
    <div>
      <div className='pb-6 pt-3'>
        <h1 className='text-lg font-semibold md:text-xl'>Buttons</h1>
        <p>
          Find a set of various buttons for React which uses Tailwind CSS to
          style them.
        </p>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {BUTTONS.map((Button, index) => {
          return (
            <CardView key={index}>
              <Button />
            </CardView>
          );
        })}
      </div>
    </div>
  );
}
