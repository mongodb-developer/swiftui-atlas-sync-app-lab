//
//  OpenSyncedRealmView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 4/9/23.
//

import SwiftUI
import RealmSwift

struct OpenSyncedRealmView: View {
    @ObservedObject var app: RealmSwift.App

    @AsyncOpen(appId: nil, timeout: 4000) var asyncOpen

    var body: some View {
        let app = app.currentUser
        switch asyncOpen {
        case .connecting:
            ProgressView()
        case .waitingForUser:
            ProgressView("Waiting for the user to log in...")
        case .open(let realm):
            MainView()
                .environment(\.realm, realm)
        case .progress(let progress):
            ProgressView(progress)
        case .error(let error):
            Text(error.localizedDescription)
                .font(.callout)
                .multilineTextAlignment(.center)
                .padding(.bottom, 40)
        }
    }
}

struct OpenSyncedRealmView_Previews: PreviewProvider {
    static var previews: some View {
        OpenSyncedRealmView(app: RealmSwift.App(id: ""))
    }
}
