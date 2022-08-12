export default function Contact() {
  return (
    <div className='container mb-5' id='contact'>
      <div className='heading-wrapper'>
        <h1 className='heading'>Contact Me</h1>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 contact-info'>
          <p className='contact-desc'>
            Thank you for contacting,
            <br /> will respond to your email as soon as possible
          </p>
          <p>
            <span className='card-badge'> Email: </span>
            <span>babalolaife@yahoo.com</span>
          </p>
          <p>
            <span className='card-badge'>Phone:</span>{' '}
            <span>+1 (437) 223-4327</span>
          </p>
        </div>
        <div className='col-12 col-md-6'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='mb-3'>
              <label for='formGroupExampleInput' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-3'>
              <label for='formGroupExampleInput2' className='form-label'>
                Email Address
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput2'
                placeholder='Enter your email'
              />
            </div>
            <div class='form-floating mb-3'>
              <textarea
                class='form-control'
                placeholder='Leave a message here'
                id='floatingTextarea2'
                style={{ height: '150px' }}
              ></textarea>
              <label for='floatingTextarea2'>Message</label>
            </div>
            <div className='mt-3'>
              <button type='button' class='btn btn-primary btn-lg'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
