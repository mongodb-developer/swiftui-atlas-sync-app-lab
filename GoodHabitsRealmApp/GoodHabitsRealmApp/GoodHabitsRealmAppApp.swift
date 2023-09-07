//
//  GoodHabitsRealmAppApp.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

@main
struct GoodHabitsRealmAppApp: SwiftUI.App {

    let app: RealmSwift.App? = RealmSwift.App(id: "devicesync-ysheg")

    var config = Realm.Configuration.defaultConfiguration

    init() {
        config.schemaVersion = 2
    }

    var body: some Scene {
        WindowGroup {
            SyncContentView(app: app!)
//            MainView()
//                .environment(\.realmConfiguration, config)
        }
    }
}
