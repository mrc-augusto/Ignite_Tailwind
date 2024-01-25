import { SettingTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { Mail, UploadCloud, User } from 'lucide-react'


export default function Home() {
  return(
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingTabs/>

      <div className='mt-6 flex flex-col '>
        <div className='flex items-center justify-between pb-5 border-b boder-zinc-200'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Personal info</h2>
            <span className='text-sm text-zinc-500'>Update your photo and pesonal details here</span>
          </div>
          <div className='flex items-center gap-2'>
            <button type='button' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>Cancel</button>
            <button type='submit' form='settings' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'>Save</button>
          </div>
        </div>

        <form id='settings' className='mt-6 flex flex-col gap-5 divide-y divide-zinc-200'>
         
          <div className='grid grid-cols-form gap-3'>
            <label htmlFor="firstName" className='text-sm font-medium text-zinc-700'>Name</label>
            <div className='grid gap-6 grid-cols-2'>
              <InputRoot>
                <InputControl id='firstName' defaultValue='Maurício'/>
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue='Augusto'/>
              </InputRoot>
            </div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="Email" className='text-sm font-medium text-zinc-700'>Email adress</label>
              <InputRoot>
                <InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500'/>
                </InputPrefix>
                <InputControl id='Email' type='email' defaultValue='mrc_augusto@hotmail.com'/>
              </InputRoot>
          </div>
         
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="photo" className='text-sm font-medium text-zinc-700'>
              Your Photo
              <span className='mt-0.5 text-sm font-normal text-zinc-500 block'>This will be displayed on your profile</span>
            </label>
            <div className='flex items-start gap-5'>
              <div className='bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full'>
                <User className='w-8 h-8 text-violet-500'/>
              </div>
              <label htmlFor="photo" className='group flex-1 cursor-pointer flex flex-col items-center gap-3 rounde-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:to-violet-500'>
                <div className='rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100'>
                  <UploadCloud className='h-5 w-5 text-zinc-600 group-hover:to-violet-700'/>
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <span className='text-sm'>
                    <span className='font-semibold text-violet-700'>Click here to upload</span> or drag and drop
                  </span>
                  <span className='text-xs'>SVG, PNG, JPG or GIF(max. 800*400px)</span>
                </div>
              </label>
              <input type="file" id='photo' className='sr-only' />
            </div>  
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="Role" className='text-sm font-medium text-zinc-700'>
              Role
            </label>
            <InputRoot>
              <InputControl id='Role' defaultValue='CTO'/>
            </InputRoot>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="Country" className='text-sm font-medium text-zinc-700'>
              Country
            </label>
            <div></div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="timezone" className='text-sm font-medium text-zinc-700'>
              TimeZone
            </label>
            <div></div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="bio" className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
                Write a shor introduction
              </span>
            </label>
            <div></div>  
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor="projects" className='text-sm font-medium text-zinc-700'>
              Portfolio Projects
              <span className='mt-0.5 text-sm font-normal text-zinc-500 block'>
                Share a few snippets of your work
              </span>
            </label>
            <div></div>  
          </div>
          
          <div className='flex items-center gap-2 justify-end pt-5'>
            <button type='button' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>
              Cancel
            </button>
            <button type='submit' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  ) 
}
