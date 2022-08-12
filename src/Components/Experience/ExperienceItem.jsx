export default function ExperienceItem({ values }) {
  return (
    <li className='card'>
      <div className='exp-card-content'>
        <div className='exp-top'>
          <h2>{values.position}</h2>
          <div className='exp-top-body'>
            <p>@{values.companyName}</p>
            <div>
              <span>{values.startDate}</span>
              <span>to</span>
              <span>{values.endDate}</span>
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
