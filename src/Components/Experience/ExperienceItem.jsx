import { format } from 'date-fns/esm';

export default function ExperienceItem({ values }) {
  return (
    <li className='card'>
      <div className='exp-card-content'>
        <div className='exp-top'>
          <h2>{values.position}</h2>
          <div className='exp-top-body'>
            <p>@{values.companyName}</p>
            <div>
              <span>{format(new Date(values.startDate), 'MMMM, yyyy')}</span>
              <span>to</span>
              <span>{format(new Date(values.endDate), 'MMMM, yyyy')}</span>
            </div>
          </div>
        </div>
        <div className='exp-body'>
          <p>{values.responsibility}</p>
        </div>
      </div>
    </li>
  );
}
