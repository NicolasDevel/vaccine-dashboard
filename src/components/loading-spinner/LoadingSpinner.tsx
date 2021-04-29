
import { SpinnerDotted   } from 'spinners-react';
import './LoadingSpinner.scss';
export default function LoadingSpinner () {


    return <div className={'LoadingSpinner'}>
        <SpinnerDotted   size={300} thickness={99} speed={100} color="rgba(136, 132, 216, 1)" />
    </div>
}