import React from 'react';

const sliderWidth = window.innerWidth / 1.5;

export const content = [
    {
      content: (
        <img
          width={sliderWidth}
          src="https://cdn.pixabay.com/photo/2020/09/29/23/38/team-5614157_1280.png"
        ></img>
      ),
    },
    { content: <h1 width={sliderWidth}>Hello World!</h1> },
    {
      content: (
        <img
          width={sliderWidth}
          src="https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_1280.jpg"
        ></img>
      ),
    },
    {
      content: (
        <table width={sliderWidth}>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      content: (
        <img
          width={sliderWidth}
          src="https://cdn.pixabay.com/photo/2014/07/28/20/39/dusk-404072_1280.jpg"
        ></img>
      ),
    },
    {
      content: (
        <img
          width={sliderWidth}
          src="https://cdn.pixabay.com/photo/2021/01/21/14/10/egret-5937499_1280.jpg"
        ></img>
      ),
    },
  ];