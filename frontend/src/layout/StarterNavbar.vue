<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <!-- <template slot-scope="{ toggle, isToggled }"> -->
    <template slot-scope="">
      <router-link v-popover:popover1 class="navbar-brand" to="/presentation">
        Blood Donor
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by LegoIO. Coded by Alif Rahman
        </div>
      </el-popover> 
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Menu">
        <nav-link class="dropdown-item">
          <i class="now-ui-icons shopping_box"></i> Login
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  components: {
    DropDown,
    Navbar,
    // NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
