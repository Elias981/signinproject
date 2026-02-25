'use server'
import { createClient } from '@/lib/supabase/server'

export async function signUpNewUser() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signUp({
    email: '',
    password: '',
    options: {
      emailRedirectTo: 'http://localhost:3000',
    },
  })
}