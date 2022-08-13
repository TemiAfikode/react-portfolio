export default function ProjectItem({ values }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title mb-3'>{values.title}</h5>
        <div className='card-text pb-3'>
          {values.url && (
            <span>
              <span className='card-badge'>View project: </span>
              <a href={values.url} target='_blank' rel='noreferrer'>
                {values.url}
              </a>
            </span>
          )}
        </div>

        <p>
          <span>
            <span className='card-badge'>Posted:</span>{' '}
            {new Date(values.created_at).toLocaleDateString()}
          </span>
          <br />
          <span>
            <span className='card-badge'>Stacks:</span> {values.type.title}
          </span>
        </p>
        <a
          href={values.url}
          target='_blank'
          rel='noreferrer'
          className='btn btn-primary'
        >
          View Project Details
        </a>
      </div>
    </div>
  );
}
