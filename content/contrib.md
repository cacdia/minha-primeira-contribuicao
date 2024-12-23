<script setup>
import {
  VPTeamMembers
} from 'vitepress/theme'  

import { data } from './contrib.data.ts'

const members = data.members
</script>

<VPTeamMembers :members="members"/>
