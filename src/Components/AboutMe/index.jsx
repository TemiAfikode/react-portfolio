import React from 'react';

export default function AboutMe() {
  return (
    <div style={{ marginTop: '3rem' }}>
      <h1>About Me!</h1>

      <p>
        Quisque felis ex, pellentesque vel elementum eu, bibendum vel massa.
        Donec id feugiat erat. Aliquam commodo rutrum velit, vitae vestibulum
        purus ullamcorper vestibulum. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>

      <h1 id='skills'>My Skills</h1>

      <ul>
        <li>PHP</li>
        <li>Laravel</li>
        <li>MySQL</li>
      </ul>
    </div>
  );
}
