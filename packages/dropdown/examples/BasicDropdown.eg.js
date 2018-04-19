import React, { Component } from 'react';
import BasicDropdown from '../src/BasicDropdown';
import 'normalize.css';
import './Dropdown.eg.css';

class BasicDropdownEg extends Component {
  actionChangeItem(item) {
    console.log('click item', item);
  }

  render() {
    const ITEMS = [
      { value: null, name: 'All Flowers' },
      { value: 'a', name: 'Chrysanthemum' },
      { value: 'b', name: 'Ixora' },
      { value: 'c', name: 'Wild Sunflower' },
      { value: 'd', name: 'Bougainvillaea' },
      { value: 'e', name: 'Rose' },
      { value: 'f', name: 'Jasmine' },
      { value: 'g', name: 'Orchids' },
    ]
    return (
      <div>
        <BasicDropdown
          actionChangeItem={this.actionChangeItem}
          items={ITEMS} />
        <p style={{ background: '#b6e2e2', marginTop: 50, marginBottom: 50, textAlign: 'center' }}>------</p>

        <p>Non blandit massa enim nec dui nunc mattis enim ut. Consequat ac felis donec et odio pellentesque diam volutpat. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Dictum at tempor commodo ullamcorper. Donec et odio pellentesque diam volutpat. Sed libero enim sed faucibus turpis. Mattis enim ut tellus elementum sagittis vitae et leo duis. Quis blandit turpis cursus in hac habitasse platea dictumst. Volutpat odio facilisis mauris sit amet massa vitae tortor. Amet volutpat consequat mauris nunc congue nisi. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Hac habitasse platea dictumst vestibulum rhoncus est. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Amet luctus venenatis lectus magna fringilla urna. Tincidunt praesent semper feugiat nibh sed. Pretium vulputate sapien nec sagittis aliquam malesuada. Pretium quam vulputate dignissim suspendisse in est.</p>

        <div style={{padding: 20, display: 'flex'}}>
          <div style={{width: 250, marginRight: 20}}>
            <BasicDropdown
            actionChangeItem={this.actionChangeItem}
            items={ITEMS} />
          </div>
          <div style={{width: 250}}>
            <BasicDropdown
            actionChangeItem={this.actionChangeItem}
            items={ITEMS} />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Ornare massa eget egestas purus viverra accumsan in. Blandit turpis cursus in hac habitasse platea dictumst quisque. Egestas maecenas pharetra convallis posuere morbi leo. Tincidunt augue interdum velit euismod in. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae auctor eu augue ut lectus arcu bibendum. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Cras tincidunt lobortis feugiat vivamus at augue eget. Nibh nisl condimentum id venenatis.</p>
        <p>In egestas erat imperdiet sed euismod nisi porta lorem mollis. Turpis egestas maecenas pharetra convallis posuere. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Mus mauris vitae ultricies leo integer malesuada nunc vel. Auctor augue mauris augue neque gravida in fermentum. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Nulla facilisi nullam vehicula ipsum a arcu cursus. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. At quis risus sed vulputate odio ut enim blandit. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Pretium nibh ipsum consequat nisl vel pretium. Sit amet justo donec enim diam vulputate ut pharetra sit. Imperdiet dui accumsan sit amet nulla facilisi morbi. Tincidunt arcu non sodales neque sodales ut etiam sit. Quam nulla porttitor massa id. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam maecenas ultricies mi eget. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
        <p>Facilisis magna etiam tempor orci eu lobortis elementum nibh. Condimentum mattis pellentesque id nibh. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Praesent semper feugiat nibh sed pulvinar proin. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Suspendisse in est ante in nibh. Quis varius quam quisque id diam vel. Molestie at elementum eu facilisis sed odio. Vel pretium lectus quam id leo in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Sit amet nisl suscipit adipiscing. Quis auctor elit sed vulputate mi sit amet. Habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
    )
  }
}

export default BasicDropdownEg;
