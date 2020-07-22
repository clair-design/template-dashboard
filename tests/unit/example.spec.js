import { createLocalVue, shallowMount } from '@vue/test-utils'
import 'regenerator-runtime'
import Clair from '@clair/vue'
import Notice from '@/components/GlobalHeader/Notice.vue'

const localVue = createLocalVue()
localVue.use(Clair)

describe('Header.vue', () => {
  it('renders properly', () => {
    const title = 'title of notification'
    const wrapper = shallowMount(Notice, {
      localVue,
      propsData: {
        title,
        avatar: 'N'
      }
    })
    expect(wrapper.find('.title').text()).toBe(title)
  })
})
