import {Request, Response} from 'express'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import Client from 'mailgun.js/dist/lib/client'
import {insertProfile, Profile} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";
import {setActivationToken, setHash} from "../../utils/auth.utils";

export async function signupProfileController (request : Request, response : Response) : Promise<Response | undefined> {
    try {
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY as string })

        const {profileEmail, profileHandle, profileHandleIsVisible, profilePassword} = request.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()

        const basePath: string = `${request.protocol}://${request.hostname}/${request.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Welcome to (dream-site)</h2><p>Please verify your account.</p><p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: 'Please verify your account',
            html: message
        }

        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileCreateDate: null,
            profileEmail,
            profileHandle,
            profileHandleIsVisible,
            profileHash
        }
        await insertProfile(profile)

        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check your email.',
            data: null
        }
        return response.json(status)
    } catch(error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data:null
        }
        return response.json(status)
    }
}