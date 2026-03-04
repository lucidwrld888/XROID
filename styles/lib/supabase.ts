import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type Profile = {
  id: string
  username: string
  full_name: string
  avatar_url: string
  bio: string
  is_admin: boolean
  is_banned: boolean
  is_verified: boolean
  rating: number
  total_reviews: number
  joined_at: string
}

export type Listing = {
  id: string
  seller_id: string
  title: string
  description: string
  game: 'CODM' | 'Fortnite' | 'PUBG' | 'Valorant'
  price: number
  level: number
  rank: string
  region: string
  screenshots: string[]
  payment_methods: string[]
  status: 'pending' | 'active' | 'sold' | 'rejected'
  is_featured: boolean
  created_at: string
  profiles?: Profile
}

export type Message = {
  id: string
  sender_id: string
  receiver_id: string
  listing_id: string
  content: string
  is_read: boolean
  created_at: string
}

export type Review = {
  id: string
  reviewer_id: string
  reviewed_id: string
  listing_id: string
  rating: number
  comment: string
  created_at: string
}

export type Dispute = {
  id: string
  listing_id: string
  buyer_id: string
  seller_id: string
  reason: string
  status: 'open' | 'resolved' | 'closed'
  admin_note: string
  created_at: string
}
