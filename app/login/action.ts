'use server'
import { createClient } from '@/lib/supabase/server'
import { NextResponse} from 'next/server'

export async function signUpNewUser(formData: FormData) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signUp({
    email: String(formData.get('email')),
    password: String(formData.get('password')),
    options: {
      emailRedirectTo: 'http://localhost:3000',
    },
  })

  console.log('data', data)

}

export async function signInUser(formData: FormData) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email: String(formData.get('email')),
    password: String(formData.get('password')),
  })

  console.log('data', data)
  console.log('error', error)
}

  export async function signOutUser() {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
